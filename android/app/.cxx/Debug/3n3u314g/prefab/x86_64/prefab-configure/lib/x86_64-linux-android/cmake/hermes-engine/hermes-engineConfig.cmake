if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/chicmic/.gradle/caches/transforms-3/9eac90854133ece5ef3804033c7db1d6/transformed/jetified-hermes-android-0.71.3-debug/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/chicmic/.gradle/caches/transforms-3/9eac90854133ece5ef3804033c7db1d6/transformed/jetified-hermes-android-0.71.3-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

