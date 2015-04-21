# Installation

1. Copy the `abbr` directory to `assets/tinymce4/plugins`.

2. Add a new tinyMCE configuration (e.g. `tinyAbbr.php`) file to `system/config/` (e.g. `system/config/tinyAbbr.php`).


3. Enable the abbreviation plugin in your tinyMCE configuration you just created in step 2 by adding `abbr` to the plugins list:

    ```
    plugins: "autosave charmap code fullscreen image link lists paste searchreplace tabfocus table template visualblocks abbr",
    ```

4. To make sure this configuration is loaded, you have to adjust the corresponding DCA setting. If you want to enable this configuration for all tinyMCE usages in the backend you can adjust your `system/config/dcaconfig.php` as follows:

```php
foreach ($GLOBALS['TL_DCA'] as $table => $config) {
    foreach ($config['fields'] as $field => $fieldConfig) {
        if (isset($fieldConfig['eval']['rte'])) {
            $GLOBALS['TL_DCA'][$table]['fields'][$field]['eval']['rte'] = 'tinyAbbr';
        }
    }
}
```