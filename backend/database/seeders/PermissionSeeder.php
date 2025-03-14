<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::create(['name' => 'admin']);



        $permissions =[
            ['name'=>'user list'],
            ['name'=>'create user'],
            ['name'=>'edit user'],
            ['name'=>'delete user'],
            ['name'=>'role list'],
            ['name'=>'create role'],
            ['name'=>'edit role'],
            ['name'=>'delete role'],
            ['name'=>'permission list'],
        ];

        foreach($permissions as $permission){
            Permission::create($permission);
        }

        $permissions= Permission::all();
        $adminRole->syncPermissions($permissions);

        $user = User::first();
        if ($user && !$user->hasRole('admin')) {
            $user->assignRole($adminRole);
        }













    }
}
