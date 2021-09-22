<template>
        <div class="app-wrapper-footer">
        <div class="app-footer">
            <div class="app-footer__inner">
                <div class="app-footer-left">
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link text-dark">
                                Electronic Document Management System
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="app-footer-right">
                    <ul class="nav">
                        <li class="nav-item">
                            <a href="javascript:void(0);" class="nav-link">
                               <strong class="text-danger">C80 Limited</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Footer',
    created() {
      let scriptOne = document.createElement('script')
      scriptOne.setAttribute('src', 'https://demo.dashboardpack.com/architectui-html-free/assets/scripts/main.js')
      document.head.appendChild(scriptOne)
    },
}
</script>
