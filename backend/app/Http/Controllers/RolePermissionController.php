<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionController extends Controller
{
    public function allrole()
    {
        if (Auth::guard('api')->check()) {
            $roles = Role::with('permissions')->get();
            return response()->json(['message' => 'All Roles', 'roles' => $roles]);
        } else {
            return response()->json(['message' => 'Unauthorized Access'], 401);
        }
    }


    public function allpermisisions()
    {

        if (Auth::check()) {
            $permissions = Permission::all();
            return response()->json(['message' => 'All Permissions', 'permissions' => $permissions]);
        } else {
            return response()->json(['message' => 'Unauthorized Access'], 401);
        }
    }

    public function addRole(Request $request)
    {
        if (!Auth::check()) {
            return response()->json(['message' => 'Unauthorized Access'], 401);
        }

        // Validate the request
        $validation = Validator::make($request->all(), [
            'name' => 'required|string',
            'user_id' => 'required|integer|exists:users,id',
            'permissions' => 'required|array',
        ]);

        if ($validation->fails()) {
            return response()->json([
                'message' => 'Validation Fail',
                'errors' => $validation->errors()->toArray()
            ], 400);
        }

        // Create the role
        $role = Role::create([
            'name' => $request->name,
            'guard_name' => 'api',
            'user_id' => $request->user_id,

        ]);

        // Convert permission IDs to names if needed
        $permissions = $request->permissions;
        if (is_numeric($permissions[0])) {
            $permissions = Permission::whereIn('id', $permissions)->pluck('name')->toArray();
        }

        // Assign permissions
        $role->syncPermissions($permissions);

        $role->syncPermissions($request->permissions);


            if ($role) {

                return response()->json([
                    'message' => 'Role created and assigned successfully',
                    'role' => $role,
                ], 201);
            }


        $user = User::find($request->user_id);
        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        // Assign role by name
        $user->assignRole($role->name);

        return response()->json([
            'message' => 'Role do not  created and assigned',
            'role' => $role,
        ], 201);
    }


}
