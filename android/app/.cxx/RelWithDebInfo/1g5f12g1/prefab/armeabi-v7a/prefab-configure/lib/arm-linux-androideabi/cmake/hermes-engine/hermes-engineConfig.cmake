if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/chicmic/.gradle/caches/transforms-3/4dbf1ee2d60ff592ba2a4e600c56ed06/transformed/jetified-hermes-android-0.71.3-release/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/chicmic/.gradle/caches/transforms-3/4dbf1ee2d60ff592ba2a4e600c56ed06/transformed/jetified-hermes-android-0.71.3-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

