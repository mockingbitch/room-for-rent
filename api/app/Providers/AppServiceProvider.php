<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $models = [
            'User',
            'Role',
            'Permission',
            'ModelHasRole',
            'House',
            'Tag',
            'Category',
            'Room'
        ];

        foreach ($models as $model) {
            $this->app->bind("App\Repositories\\{$model}\\{$model}RepositoryInterface", "App\Repositories\\{$model}\\{$model}Repository");
        }

        $address = [
            'Ward',
            'District',
            'Province'
        ];

        foreach($address as $addr) {
            $this->app->bind("App\Repositories\Address\\{$addr}RepositoryInterface", "App\Repositories\Address\\{$addr}Repository");
        }
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
