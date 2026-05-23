

# 📘 CSS Positioning & Layout Properties Guide

---

# 🔹 1. `position`

Controls how an element is placed in the layout.

---

## ✅ `position: static` (Default)

![Image](https://images.openai.com/static-rsc-4/guOCBDwMYevNrYZMBFLOUE9LYu1rA4TSaNqW-4LbRxjUrK7erW48ZzPZ03D6LgrmwWl8tr4aDfqQD4datiqwTwDKlO9rRe1STv0TpTIKU02Gu2f0ZbF1wz6YDEZVujZ1yme48rMfcGrLO3rntqD_-AelqdE3LEZ4zAxdMIJ7Vxfvub40tch24GNJRxdorXJd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/yj68id-eeo7rCtGp0LcwWW0DKmLobsa5jymElm6O3GKX80nFBwCjmMNaFSbKN99FavkvxrkI2PP4IRHlauuhQfVY7QTJPV1Eygqpy7BqwQH0y3DzcHsgp8-A88JuQGjRL9rAr-lhQk-SG9PvVx_OWMngiXx2Jc3BQv5crvX_6aqKY4E2KhK1wIh4WGVYdQMy?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/SjoHBWRlcm0kwbdC7iSmzbj4hq4Iy3sF3q4yXvQtUQ_TnmpuXV-MKCEJy6_El0K_QXCKf0UX4BvW1qq4SJuP8FnBeFNcBiBuZsBYe5aVA1Q0GOiJNlE-OlQko-VRw9OnaCn75777WXgBd6gYWqGdjEkal0KUAC22X31PYbRt4l2O7MSdArZbIzroZmD6J7Io?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ES4JvpA71wXXsSl1Qc2YbUbgM4Its0eceNWrAQwnaj8121qpvgZSOxVF-VMdRTZsltb9Wu6x-YCCtkznzX-5TBxml6PI6mrwc68tmugdtCVsRPqf4d-Cu_Xe9KDQgekk0K8mWDFNQM1kMLgxUWoUV8qbNPK5OHlHJrvhHOAG5KuL_50ODqQkP2aXKvzjuNhQ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mbFn4dIPyL7typXeAnTcUkxio4VT1LVrvEA7o51F0VLse15GiR3loE9bH3vf6GrwHh7tydZselNCMiyNRPQkHdSbESAfdXDKiTUVL_t4FhoPy-Qj0-pZcshYbD8kRNaViRybMm99nRXUo7KO-QPbAOwHPSgSnzmIeXoCV2ZBZUx27hExKzyGAzjjrCBp_Cd7?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YG___6rgIuE5a71S_kROzCQJs5theOkL0CJMjyyjD_PvQVeSJu7tsllcCejOuLxiP1hezov3BFYAcsgcgm-Rzrr9ihZE1SaiNJjyYMz-z0BnsvNCoTJF6NUUJD_huxKi-3av-VnaycuxisKDG7u7tU-BoqdPV75IAZhVTgRdOcoCYxHo9pi4UQEoKRI93tZr?purpose=fullsize)

**Purpose:** Normal document flow (default)

* Ignores `top`, `left`, etc.
* Used when no special positioning is needed

```css
.box {
  position: static;
}
```

---

## ✅ `position: relative`

![Image](https://images.openai.com/static-rsc-4/SjoHBWRlcm0kwbdC7iSmzbj4hq4Iy3sF3q4yXvQtUQ_TnmpuXV-MKCEJy6_El0K_QXCKf0UX4BvW1qq4SJuP8FnBeFNcBiBuZsBYe5aVA1Q0GOiJNlE-OlQko-VRw9OnaCn75777WXgBd6gYWqGdjEkal0KUAC22X31PYbRt4l2O7MSdArZbIzroZmD6J7Io?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/tkmymFpxuvFt1xw-Rg5nmF4HZYqwk_Zi2EnkQFbvRsGDqtdo5OJafCQQrily4A834TAZQ8cEaGXuF-vQbDiKwGcJFNuUfP3gSoiFkCyc4BHl0aR4ECZ_65sn47TfYHEtLL5yQg9ZFpAUzE2_hsG8Y0Hn9Sxn1ZtFE6j5BoPJskTVUakpzxLx4TYZYRaVF9lR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/guOCBDwMYevNrYZMBFLOUE9LYu1rA4TSaNqW-4LbRxjUrK7erW48ZzPZ03D6LgrmwWl8tr4aDfqQD4datiqwTwDKlO9rRe1STv0TpTIKU02Gu2f0ZbF1wz6YDEZVujZ1yme48rMfcGrLO3rntqD_-AelqdE3LEZ4zAxdMIJ7Vxfvub40tch24GNJRxdorXJd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/qjnwMr5iEdieHC8YWbOEASAn2Hmj6vYv47vBDU9e9eXJHFggkfP9JsknDT-pnhB9bhxkR_TZCVayIFRrz1Ok8rqOBIqwx5Upan-qgVtH2IEyyHiDOSi_NKRH7ElGmfxtAOALrpodSNXeIQIxfu1MBgwf7VP_w9zxn-yrOahvnI5Yc_XexMsVXHirHbmJ-Hf1?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YSnue8KvutBDH1ZnFEXaiDvbQt35ZPATjsVUdc1hmSrSCAYF1JwDypl5k-jnXZqIVa7fs878neYbTUFP8Y7UK0qLYvcd0auR-SgnZaOSEiwtjPADiN6jyugWfXcpCo6dDYuX-qxOo1woeurqWZY3Ja5YRAUM9tK8oHD0vfna-JHo-NZ0jAR75fpdF5TAzSp8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/r8Xk9wbS0tUqPxae4f6FRdEjiqPmF6C8AjlyO2IY0edkIFJkEHjBdELWnKUstuedeehkXYNBqGcDSF4yW1esbQUzy-y7tlEmoYvsf0UqmxoPMbLwZLL_G2RCQG_iA9jCdgzTPacp5hzlOW-G5JCMIVqW14hK1oOEo_FqoQnX4X9Pl23LWDJU19sK7wsNkELg?purpose=fullsize)

**Purpose:** Move element from its original position

* Space remains reserved
* Used as a **reference for absolute children**

```css
.box {
  position: relative;
  top: 20px;
  left: 30px;
}
```

---

## ✅ `position: absolute`

![Image](https://images.openai.com/static-rsc-4/ihN14vfdlnQ7znONgXZ9SZOlWlfFt5mlmQRl_3F0d-_9VxN3OesU8WW3DZqmgujkOYRnsGsKpEAn-zye9556wzaHSGlEIhbRH_zvApRQONm_qmQcMnyFWIApdMOKFD7dp98xcdt06eQ0zEJILpiRG8l8CGQBeQqUWHyVg6ZoE0buOiMmvosuAzAcongW9kOZ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/q7vj9grp3TXyM1N3lB1vnfRHygQTzRJtmrJ-exN3_LPjTnDvSM_mZdql6ACBhmLagrg0wKqtihSWYqXtc51cR05hJcwAXlO9ot5dD-5HE63lvaGbegHnCjE5P08RYuxFfu2XNBvtVpv3xlcIS3-eLiOhgiNWyIl_-No3mKbPVE9rNGSg3cGgLMzmCxWNMTNJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/vv0jNo7w8_LF9xgKWizjLYrCRz0eJBm06K4bcwDDYf1ZD39nMXJ6sbpt4yRcM8RacqnmjVylSAIZ8Fnpu-z8qHcHJB_oxZ4G5A5hBOvN6lnFvdIrMZPLehJponrnr0iy7T0zfUfxM-P9-5M8dV_M6w_beJlAgMIQiXre-bEOYXwL6vHEobOSjkUELsBT53ks?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3FsIt69r8-1EDnLW1LTS6gKmUiDAn8iz_AYO3UXtwVf6Q3ZUnu7ItHZ_WMCljAvyjrKNncImIiOxA7G5AJiKKRAhQLwaELQGyWeLXMxJbEtSLu538h8EflMxH2Vbvo8KBimmsvXKY0iSqzA_K5RS7Cv7_CX7drDpvSthQ1rqoUY-8yyAQAvvZVEjjRyQqoHD?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/6SRRaNu1XKkKVeMAI6SK4vJ4dBidPgKCsxsZjxWIuxk-31nCFxprjHEKlWeAe9NglOUQmJ2vYM0fwJv8qy3EN7_X1feZE859RJB2VwOBns9vw7KqcWtp7JprTxShzSG1U2bKC5als--dozdG8w-yWb-aRIpPz13nnMe6OFtqEYsMtmvvuK9xGnuHoE2JDBOt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/-li9MNcBP6tgJorj336xt-syAasekFp9TfRZ9Chn8izcn-kTV3nQkpNSYef2SO7-0Xm2QxfQemYKztaO2BjuCXC_jpCPc_qAd0SECOhaQiBAUfKEJPLiUItI_7MBNiGDT0Di1wSNRk-fD9m84myHhLXwRqezo9VpDmdNOxImhj_71XVPmxYzf1njv0O-Jfo4?purpose=fullsize)

**Purpose:** Precise positioning inside a parent

* Removed from normal flow
* Works relative to nearest positioned parent

```css
.parent {
  position: relative;
}

.child {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

---

## ✅ `position: fixed`

![Image](https://images.openai.com/static-rsc-4/Q-mSFb5Bg3eQ5SMHAF3LBkvfqQ-Voamz--5kE3WHhenR1vOdgW0m49__LeBDVXGlg6_6osdAI2vGLqB8i_Ay_Z-vZg1qMHEFaftPNUrnRNcGiPSIwXrD8PEfjLGUxWOyY3Ps_32xGJRNbLeztpCxgqsqbCx3nOQho3HvG7WJz7PVqvRXZ-_4N-7B6DkP4UrO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rbxYYWuKKa3liav3FuUoW6bErlJVZ4ctXbVTcLTjiIvrh5KYKMJ2z1IB22-Oh6Jrd3492Krt7jAfXmXU3JrcJ2dyfcOdSNntp78_yw-KmGtYwdpUe3Qw3FWWMN4zCqSXoKSBHWsjeaCYvp6ZgbI6YahVm9v2JRe0MiMQngkwCI-FImV9mC247SCS5sdjsSqI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/zShLkcp6MWYBqLkO5P92AaDnCrrrELeg8qNtlpN-bFZEvK5fq4Q8W1PhYW5aVLGDhDxZEWzzIviMWU31ama6JsA8IGAyYc3uVgTvZtj1g85pVFCUAjHBqH6NduIXjV8Q2jX6anKstjENlH6yF3_c-3NX6ybCb_TQCLG9L2Uj14FPuJZMglftZ077BvUJDpIq?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/B2C86GmtjY_P6hAtL9LUc0Eoode1xB2-9eYVaMmDCWn25-N0CH7RYmmOaZIDAI7N051eFWruHTdwSapn01BQYrIL418i5C45Pqgki0AMXvLIf8ZutNbvyEffXV4d6rZD31REKCpV7vZTEDpCgsquU_9ueod6cMCv-aeLDqvB19SfvrXoWHDPgM6-irr9fVw8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/lRsliKCwaD_0j0eOzGxjGrSsQbtLJY8e2Ha-Ib8wLmqmdFcv5onJ-VZauWqyZQnPpKD81DrlZMJLfCs5lF_ZR-yyORp0Y_5tVAaEuB260dIba91dIhXkXvh4ohqt2iJq7hgVZDWYm7OI_G-nPYzT-H3mNJysDd0t4A3cuJbN9lt5FoKOuL1kbAAf7mmyObf2?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rXfJsvf5hX9sRH-7bq0j0UuDhm0QMrfFWD8Hn8ojoXv6rITXt-jw-MPEndyl_TSxyMFhYG5LwGb7dhPCwo1OnBtfRRgo7VWzfdY7JsxwATeCzbWVr6IorGaM2cbtuq7hsHh6YzKe6iYFKcFMeJg09I3i9OGkjpd5d3k8EZ9Ywy1VvboGzkmFOBJyCM7VClB0?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Kmzi9hwkkrl_eZnrhqMoqyMYBBYLNo1aC5pho0oUzMpzPBxHY2ZPDA-8zcPR73gSrSy-oY-RyytL9X0BNYcegmXUK-BYMUZuNRKziHlIChcfqKpx0OHnWXmD_4J_nHsss187mRZrbLQykJgEeoiCzpGM_Vs65q-iEfPNqoL7pI-kE81DG0Ca6zh7uD5wXDPi?purpose=fullsize)

**Purpose:** Fix element to screen (viewport)

* Stays in place on scroll

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
}
```

---

## ✅ `position: sticky`

![Image](https://images.openai.com/static-rsc-4/1q0-odmcezOG8DCgDqOa7m8IM2Q4h5lXovzd8N2NPoQRKb3cyurF1-0V-M7hdNDyHp8EFCKVD-XOSa-elg2C9ETlrf-ikEkJGcC794zefJ-YP0CJe_lN2P0ClVKNxtrr6wJ-XYWYWtWEsyWM5jMccDF0dT6vgEIPwE6Ht9Xii6GcAuJ6lwRLftQA7HOlgJ4M?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/m-tbTFpAw9jongipEclGFUpdo5uCJTD9jgavUqG9DGEVDg3NaOx0K3NUBZSHPy6Fs9zLJtaOL99dUSW78638LJOxcaNBeFz5x70CWXEEkV7Uq9sfO6tW31f8Az24HWWBGkzawLepnLLqlnv-4dwBIdfkQUFXFcyYp2BIN4R5G2BXElFZQsv9SJqlwC-ydlhA?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nvyEPMIni5V0FUksD3t_z_SbH7bb_cUkVhcLYi95U9B9LHOkrtnjTDNyT3HttUOCiVEla0gYZkBcct36sjOADapBD8b8LCO9SilxHu0tVX06OI7hr6Ca7gmIRrQ94A91MLk4o2DOcqKcm1Ad2L3znaeaW04i7tr8MSpYozcZuEegOHF9yzjdvh_mYBdjmF3_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RL1RSVLkIBoZX3ctuam3V3Ks5YgwBwZcJXZ-qIMKh9T4o7D7vrq6RiFlTYl_VG2TEPWrUINOoUC9x5B1BkXF30_cVBixnf6xhAKu46b1emSmUpx1PL-JLFqHoJfmS5zRKSl2BXmw1Z_8gFiM1WmaoTyTGjPws9w9ixiM9N6wMYBtF6IByvHd9bali_rujEWT?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GN_G-bZxdbH7xRAN4XpUSkabOxeW_1yzUPSMX_rMkdz8itzXBnG_o1q01wVRU7Wvf5558fYLms9onCXhKAh4zxbSwpmTTNtzepdznizO7Rdvq8l2H0pQjKepYM8cuPzxK8qJtFPPaYr4T6pOq57Q939wqj9CV0lERdpytcyE7NxdvBdblWiEGjCxYAMo5A2b?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/brZJcetgatiOUY_HWYOgHrl12bx0vSm8TS8WTUFLUB82wROizIFDTsZGKFsZSt2nraZOcbekKH77Vnk0PJnT6FpbIdwLgEIZp40RbKIyC8vZhdp9ebly8cJU_nbOUDOs0BY_z5MvC6kQ8D4eXuvswKM0JN8PSdjwv2y6v6mhpLXbPdUTDPEI6NMmDRvd40E0?purpose=fullsize)

**Purpose:** Stick when scrolling reaches a point

* Acts like relative → then fixed

```css
.header {
  position: sticky;
  top: 0;
}
```

---

# 🔹 2. `z-index`

Controls **stacking order (which element appears on top)**

![Image](https://images.openai.com/static-rsc-4/mVq5X_TfHWnqGbRH7Wje3FGHwS6pd0ORPPzV3m-qPimIejhCRkeBqhF3FDgX2OnpWXqEe9LV3MkEB5jeF-yYRpGwkxFjS1A3JLcF7XZYP236CscQzQbd1CgMCXTgWOj2Q2Py2rdOrNtt1BlZAwfUVwPami5FEwQKIojETdLY6ct8Vk6NOh064UqY9mriHbnL?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/pCISdIQaUSbEIgeAJjB2uxcSdsUWGASgiqXdtRR7kC878Sv9pFIMfeErKkv68vfpzn6NlFYBF6yeHOsTNQTP871zdwMsCbvaEr7j3LOLe1fD3KUXnI3yjNrpLw4lS2i0n733GhKqS5_4kc7lkxvEpzxcahEgAvKbcNJtXVPVLJquegBjhcxLqyQ0A4fnKvhG?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/HpWWQQMyCwSELvbSBXTqHaGeYkvq-MJOBjdVPIjwAZ31RQwaIQs6owSrUFTpN6XkGQEczkR33rmXz4w_vYcMbWiZTgidLRshnDACtB2KQcYtU_TTu9XvUNH4m8vY4fvgMJxO8YpIGh78DSc7vWTo_kaPUsh2ESUVobbQTPGz3E9KdGGAhSMA5I1Hxtr_bvpd?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RAndCosKfTa9hX8GZsB0WWMt-X5wkg4zvI4t8RuWUtuNNFZC2ootWbDnWxUgUMG57rTP3j5UdFHa5SnhIz0DADL8wkLQFuluyD8k_GSjpHFJU0YGJzW4DsWY_jMx2C9d5FTW6W_BgUAdnLNlj38jm3r1sGClwmyhtx-UzgM6W9OZIOLrTCktvKESlsfocBPN?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/H2db1VDfSzY4c45ULhe-dWwv_PhnBrhU2gc_5RP0HCwj6yBrkvmZyrk0ByE_W91qKdBwrxCPhh5MqJO5FE_koCkCS3UzGm9n_HRi5JLDN22GqZzq9n2p18bxJusWCaGDqQXbFB1S2gK_y9A_6NxKcno6F1804Ph60FaqzCmTUQOVg1klGpvdEC_IgozpV6gh?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Zmf6MZCWg0j9GgD2g7yNSD0y606iX-0VAedk8FZhPfBG0n-PzHRuUr3L0-yHssRZrmgPkdB8q5dwYojWYaDNgG_6WvcYfkvVmDkXlRT1PX3BboEbcPmnrkM28th1a0TZcBFKnM6Ho5izBWMODhosh5AsF0BX6cjTA5YNhtCTCMnXJUnGW9AxVPDXYv0JqxQ6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/I18MWlicbkIFWREfeNVY36nUv9SiOXpGw74F26lmIxQ4RgInqRAR177OgRLg-a0Nfx2fJgD-ZC8rPpC874kOewp-KFK5m14nM4v-vi51QSVNetChq5S6B48SbNItP_Zf6Xj4HBxpXtlE-3d9Grxkad7m8oLKjIP65apsBiQy0mKt-KcSr2-2-OvyMrGcKYMC?purpose=fullsize)

**Important:**

* Works only on **positioned elements** (`relative`, `absolute`, etc.)
* Higher value = on top

```css
.box1 {
  position: absolute;
  z-index: 1;
}

.box2 {
  position: absolute;
  z-index: 10;
}
```

👉 `box2` will appear above `box1`

---

# 🔹 3. `overflow`

Controls what happens when content **exceeds container size**

---

## Types of Overflow

![Image](https://images.openai.com/static-rsc-4/KrJHXzD71PSKAdPWpyi4X8nOHt4h8UjnFk4RHtQ-kVgq2cuF6jhAgaXe-sODFb0fJ1Xqqi0MyXbG9xnUTwhG9oPL1gwceFjU18uhjp6gxvY6VW4gV8h4GXP2k-PILmHh03KYCIbdfsokf7Aq-XQIv5O-aejHSvNdnEWd8K_0pDORlkS11snQWde327V0pV09?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/0kvzBzY8jM2A3LVMqWSJ2jQLFedm2iSLXEFsjq7Cix9ZrzAgr0o4qBZjkhTsG6QEekpF-FE1hLXLBLaCLmznxCZeBvViyQBs_La0-vtO0x5WxNlw-tyCPF2RjVnxKh5Kg9ucThYFLWFREimBwK6qg2eDN2VfE41CFzsxz4KjLufjxW5VTnPLA6RRXk1imGYJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/G85IdRDg6h5nikhvru1AvCCXLEkAkh2KtQndqknP_2FA9kxZTaouLzR-f_TyRHFtztIqDlPHDwfxZJNcKFBBhU9Mk0sTpnvJYCp4Nd39n59xa-YKfc0dKnBmXmYTBdzvJZ80eI2goArTXNhJPZIZ5CHOoCHlUB6X53FV4ZIYtLsCs37pGUswcy7dDhJT0uzU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/deiUjr-0N3I4t_W4OhUifhU8ecgwLWBO-NMOn84fi4zKUGjAwESEbAWDImFj0UJBB1dXPUlAoa3v1tPV8Q8f6DC4vRP9M92KdwnKdY8f9m_P4DFzrOIQtWw2R0kIDDlh2JKchTIylnzTp2jSYFp0W7O2kacONIdrD43XdPt0HxzFYF_TKMpoSfcXsOOLfkOz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/DKvpuWToRHlqeHpnZWPvv8hra-l5K6hNm9bfxzARMv978rgFVnUgXbAT_RHN1p9yBnp_LGAms_unaolgqRDhJkSu2z5SfBFnQaSsEQ8m8TcwHeUgUDTijPVyUz9XUOirmynnscwV-_FcPQCh3UMwLSDd2Iq67-wOAPfo-AtzfwGp7iDBlnPfjqA55ebjj5Jk?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/M3HM_aArlisBr7RURxq31w3UDDQ-IgPVcnIlPViRwluhsEJXM_rxukmw8BChK_A53GcTif3Uniw0KXJttknR-4dw4AGZjDIzyl50CkLDdB1sjDGfeI04-m5faodlOuWOCH1jX8tp7cvpZK5yekT4LsfoCH_xiIht5VHfBYfUsxZuqSC4i8ZXZ_N2mknNyz8U?purpose=fullsize)

### ✅ `overflow: visible` (default)

* Content overflows outside box

### ✅ `overflow: hidden`

* Extra content is **cut off**

### ✅ `overflow: scroll`

* Always shows scrollbar

### ✅ `overflow: auto`

* Scrollbar appears only when needed

```css
.container {
  width: 200px;
  height: 100px;
  overflow: auto;
}
```

---

# 🔥 Combined Example (Real Use Case)

```html
<div class="card">
  <span class="badge">New</span>
  <p>Product Content</p>
</div>
```

```css
.card {
  position: relative;
  width: 200px;
  height: 120px;
  overflow: hidden;
  border: 1px solid #000;
}

.badge {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
  background: red;
  color: white;
}
```

👉 What’s happening:

* `relative` → parent reference
* `absolute` → badge positioning
* `z-index` → badge on top
* `overflow` → control extra content

---

# 📊 Final Summary

| Property | Purpose                     |
| -------- | --------------------------- |
| position | Controls element placement  |
| relative | Move from original position |
| absolute | Exact placement in parent   |
| fixed    | Fixed on screen             |
| sticky   | Stick on scroll             |
| z-index  | Layer order                 |
| overflow | Control extra content       |

---

# 🎯 Pro Tips (Important for Interview)

* `absolute` always depends on **nearest positioned parent**
* `z-index` **won’t work without position**
* `sticky` needs `top`, `left`, etc. to work
* `overflow: hidden` is useful for fixing layout bugs
