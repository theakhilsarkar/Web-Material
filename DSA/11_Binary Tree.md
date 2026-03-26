# 🌳 Binary Tree – Full Documentation

## 📌 Visual Overview

![Image](https://images.openai.com/static-rsc-4/2XML_yLrKFTtPyrH_yw5Nr1b412IKiSo7hEhasVJKyhSr1sxJuZtcrMeiD7a-ne_D2Qho3jUm39D4xCTBD6Bn9g1dNB9ErejAy-Wy9cDMzqBGzmujJGHlo41pZCvFHHBLiH1nd_Db3nS5bED2eHvf7JE3HkLlS59bHzY-2lqi_VKhT1FPyf33llS92-Qyte6?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/3-vraGi0kaClCgXyQF5tWsV_D76NRpdRmQ5DTQpPwdib9GWbrOxW8oMxK1OV9QjfdPx8VyLp0tSb0M8nnJauj_U9qyzBsxbPDZBu_B0T_dNFrLbibzXcizFYJKfp1yWyWlfHwjH3y-lXIBRnq4CGBGj0qNPIstzLLBFkL0VtVtvFEvKICKJOXf8Hw0Wz_HK_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rTl3E6iQjZ-afF67_4AjURUVdHUNbvWiKwEoGkDF3-lPhWioGJTTefIiEDO--THzshcQBVHTKQLi6wYecSQiwxDVSUjDFBpNGMT5INuFwtPh102NjJ1I88Jk4ljLmODBgI0G4MAzF6gVhlzb-LwXGIHGpfbjkJBoaGGXC8XE083r6r3yVP9Bj3URtCg9EtGq?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/OXp4RCXmjRBnutlQr9Rm1kF9rQepK5T0qnIpUp_nyMZNDTIzBLF8XZRjdHOBfJLJL6le7RFEyZ4ecPfaG5ruN4ZTs0jG-5Nl-1N6cspdkm5-GfGDsimOpu85aNhR6AkDG_mqX_DoxuTp8-VyNBTf1YcCwGBpGnzFaa0jcoqqcXS0RO4D44XubPRPif0d2MYb?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mO0bvq8nsb_-c1OL0zUOWRDlmIeX_kEGIkMORFHZEefS1_skVePhU6O7yDEA-uI-rUarvfL05Pasi1KrWGO1S50EF0UghiiCCGssQLt17MLeTgTApDg2eVyQHP58YHL6d-Utq8zVcML69J_eYaaejq0DY5mmn7kKUUmd2Yc5rKFL5xpfOdLnO1XjhnDdNsaS?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rnF7pt_EAuMxJYP4x8yZ_OpD3gPAb9T-zAYJy3MPkFZBtW1bTdpCFeNmAjsQ00_77ZevGYYQY0l-yyB2K2bFJhXOcWjE9i3-Ysulw_3vh2wo6BgCEgPu25VmcehK-z1oMf8ONM7LivDPK8-21llQCzlZzr7y9ciEyJhGI4__UERhaXO-He0pYGhV5XzOuyiD?purpose=fullsize)

---

# 🔹 1. Definition

A **Binary Tree** is a **non-linear hierarchical data structure** in which:

* Each node has **at most two children**

  * Left child
  * Right child

👉 It is widely used to represent **hierarchical relationships**.

---

# 🔹 2. Real-Life Examples 🌍

Understanding becomes easy when you connect it with real world:

## 🏢 1. Organization Structure

![Image](https://images.openai.com/static-rsc-4/HMliT5491v4cppcV-txVtPZGfAcT_ocA1oJv-z0rcyXAV0zA_Zxzd6TdIna_u8pEdRgsmTY0RURPCEOH87FMlyC_Hu_TprVWiYL8OlO9mRve4X8P3onRLAXIDA3bHVxnFMBblhnZbT4AQH2pqu1ZcnAd3y8rnEOtKxXIV_R2gsaR5ZdZxH3q39Aabzp1ld_Z?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/8fxicLVFGQbSJ-2Y1CmudjTf2OFlssZRJbp56E5ryh2ph40Ozp6zrcsh-HPFTK-_fpP15PR2EhLYxMh2Y4ulqiGIdCQ1JXuhApgw-30GhZ2-fHc6CsoU742WvWxHdfA95izR6Hsiuia9TX7NYo4I7uPelBnwsR09mbmv1ynAZRJfYuIYhS_ekd8qu_d31iOJ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ozDS_jnXdyHGRu3nOgVG9MroSw-q0pNl8Zi3yyQrShcxS1I5XbbUBEwLER5nGxf-yIQ_IJWcuHsb_P04xSjS3zYjmLW88H3mPzavUvljMSsjemFlnXYM3oFm6l2BE_R7b_V7PR8zC5QQ0Xg0MtnyRthzBWIsbC9zLrnBsPN8ell1RKO7p2FX-iqo1q0j2gIn?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/GJguxeciC1fW-MShh312xgmSB_gelu_tMLYmJfB-TEdYuDm76KJmlF6UQPF6KGOAYXkgq5O-2NcZCPozoZWTM0EFLwaTanQHW06diPKTJP4SZf0pCFn3MP_giY_WQfgIFW7mUiw3LAscbdTq8xGfL-s432S8eAd1B6v3r9eULupASrdmJDkB7VG3uMJubjLR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/V31o4TSICoGAt0I5_c9yxFqPBXk9yKHmMKH3JI2fUA9cv_V8jITXQMJ5LfU1-nFiXquJK9Y-jqzGEdN-ORnRLuElmPYnQaCXKTj_RHMK3tJwoPrH0ZEhRir04hA57kxI6nvdIqi-BPw-gzx8pjVKC_0zIAhcQZ0aJDAQGx_ou7cZeiUAKuTAzW1h4LM-Snk8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/x_3eawkcwWxdPZBpOrRwJ-HI3ZUDkTqz1gW7_Lx7DNhU0DNNTzt_Is0Di0oeoHpm7mSPP68LRVCqlwOEPCeWdKZpWImZCIo_F0v8VI7zymFRA3rR5qrNsf2z5L1uUmPY6C8fI853k65hQiHbHMRPduB0JMHAYGIn72ZODlGVlEQI3rjvzD3oY5HAATbCZz20?purpose=fullsize)

* CEO → Managers → Employees
  👉 Each person reports to one parent → like a tree

---

## 📂 2. File System

![Image](https://images.openai.com/static-rsc-4/olA1a32KNuA0b240pNsILVEAj4bOPVPnfew4i8dq1-Rf9QHA-3S_A6Kt6D8CW6V6yTBWuV9GDWZT_3f_3kbhr7kMhpK3AnprNAjgD4fFmgkJAP5hA_-Xon3_y9v6E6rmuqsEeaq3FcJtkd2-3zwq2NrGJwPrdjNlR9fS_Velk9gYWgygb8f78a_wTuSdFsX5?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MoVhgx754yXswYJP5laTJNhWdPZ14K5PAm1pEH0Pbdl3WdktdFViasuSY_-2c9wq8bXFVHADx82M0XoHbDkL9-z5vIsmwk4l34fKwXyYYfJ7gDksk-BiJo9xOymvzsf0sQ53C6VwGSteCAaSz1bsBCYTu6amI4QiQn3zz2Y9c4tlWNP-Njez-HAMLXetDXgC?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/JIUHTuHU5CuJGr_jNF8kLfPATC11FPjf1XSTlwvByxVeyb5KjFILf9fzqsCOZLZ5dY0DNm_XnumqOIvQCDuwxFx9X_WshKGMkZPeef807i1xUXSE61bwbJfvcaM6XBkg0ogzEmlhYUBJqNG0LMEMhGnnHKO2iO5ATe85eP54nBZRmtRNbCt_sAv6LwqH665g?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/N1xp2cLRxIRI4X6kpHkaAMKW_oJnJ8Ah1kVSon3cPyVKswlqeXV0VlukCW0IdFCrpKF46WqbNSSKRwZOt3VEtE-7VKW6CRA4eCWmEaqUEFBb3nvpCoPTCwRJ25T-BQwCHWfKwyE5qaAf4OQogGBXcFdqIqS3rxNNMNBQ9U4pCkutcB0AD2EIQUa0YQ4Ikt53?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/xnwspre9m2mxLbF_8PoW2-CT6Y4hPf8kBM8ylgp-WM9l5DGoGOhR8jXibBOcubmhwDM4Kps0Id1n42rftqqp3CGdBXoNWNRseylkj03DaoFAmg9QEvQpXgzvD_IBo8gUeB8uBThaHlI_r6pKXUKgcZz8AxLw_BHD8-pxSCTn2DLb7Eg5MJrvg24s1r6c-j58?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/YHjRk_3k_WWm95g3mKVBLGkz1v9hkfVH2cZltGPrhNwvT9fN4WEOhsc0XA-SVZBSPpR8sFt28cJA3kC717Buj_lXH2_MR6289h_VnrP0wvGBHeHZoszmUk8jiQ_E22H7u11YINBPucn4OahDi6ofwExAQrWfj4OBs51mfpISmyhcy99IE47p5X2LsW4v4AGu?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/r79wsSE66DR5Qi7qEXPyMNfKsZFkkMxtVFDoKFnS6xWrtmiOdnX4U-HBBI5AlhotGGAjK_xgbf02s3MRvGCtgGBpno4x7XpG2nrPXVwh1HE3si7KHRMs82D4S1vzP77j1TIurLAoOUbgMkp0RIQvfOEZu47NcS5Xg5RWX-SsrYPRFs8dfS0zCT7rGjKpyuea?purpose=fullsize)

* Root folder → Subfolders → Files
  👉 Exactly same as tree nodes

---

## 🎮 3. Decision Trees (Games / AI)

![Image](https://images.openai.com/static-rsc-4/T3i9aiqE2cxrGx9HkQCw7tEbc6QlHDSrTLZEHtI2xrcy0Nz_BQJMjdZW3_-kp3xBpw3O4ZMpqZQYs_WTbZnNGD7FPK-zAs-NxUD9z0NBChAdKws5cRVeu5iJSflOG6iqaX4bzjzB9BMkKsAVYilrFWm6HD0BcZUdVqv76zMd48poktO9OlOpW-24DK8u9abs?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/JZRzs0JJhCWskm4xIeJe7XelLNpyD5rF2FpcHG6pJoUFokhRd_lf2REfJrEY_VT8z95_M8fTREZlDg8JxtRHZCBgL36qF4fYIf0ddbUTM5eFG7qfFqoq3haBjxfasZ4fk_KPkkMSRP4muHir54oSNT83MSTTDTFgOiYW6XNntXuNuOVcIcvWZamGSiP9HRfQ?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ajcx1wPT99MXDo-ivqnW3zCvGzpjuDJ6OWzsCZLkSvVVCLmStqLBDvaDZMIh_CHCtYmcFTUV5MH1SdQKz8GBNRYpvezmd2ptv5XmKfz5hrnlY3H9tNqo58TivpZo7pvKnFH5OK0qbFQNZ1UxvNxvHXMkVxfUVGXbf7BwsfHfvjBkq9NB96hIHL-XCU0uPCXU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/KOLye547zcbsNZ1x9sG3EE2Lt5FaR-0gZTHJT9Jh3ep_3spHJqTA7c0VoMaVgQftGx9tWT-3hVz0nuTt7qssdPDSyV76zQ0LqzUSNLdrHfc3iJnfN-kZcSo_Lx1LJmA5YPHjGBoI25cMHjKAqNswlgIfGVYKumNtuRvSi4H6vES0ohkZ6T0GHm20FKtmjlNO?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/bnrQRU4ILfEUOox-gK_GgO3FxK_JprA9aRN9DAn_E8L49GkBqFUtOg8jtXkHb-gauGUdLihWPowbOofwiCspPNmREV8kUkpalYIAdq4DgFgHO0-YS6-ogAd_LsEqQSB7wMOCxF6m_QQCOKjh-rbrfFuZ8WmtY0-ohl0Tqazc0Tlqr8xbxP04A7y2vU8W5b3h?purpose=fullsize)

* Every decision leads to another branch
  👉 Used in AI & ML

---

# 🔹 3. Structure of Binary Tree

### 💻 Node Representation (C++)

```cpp
struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int value) {
        data = value;
        left = right = NULL;
    }
};
```

---

# 🔹 4. Types of Binary Trees

| Type     | Description           |
| -------- | --------------------- |
| Full     | 0 or 2 children       |
| Complete | Filled left to right  |
| Perfect  | All levels full       |
| Balanced | Height difference ≤ 1 |
| Skewed   | All nodes one side    |

---

# 🔹 5. Binary Search Tree (BST)

👉 Special Binary Tree

Rule:

* Left < Root
* Right > Root

Example:

```
      15
     /  \
   10    20
```

---

# 🔹 6. Tree Traversals (Core Concept)

![Image](https://images.openai.com/static-rsc-4/fQV8ZKacvmXuWKCMd4MuXYFVg7_b3wJ5K6DU4_UVd43jOJGc6o0acAUQ9XA-8Ha457DmLEmAJBoWZpXpSI9sPE8azYsRLbSuifcsBpGKQGSgiKfq23MJ21MmVq0x83pGmjsC5KTUqL3ybwaSYCwD7OULQu2QXoTLPjoAPgUTHE7-C3DRgdNUNoeHzhd1MFYC?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/E7znpcYt5TPdS-BrYWfPRY03Ff1m1DWgbX9xjMpSm1zBbWI83bcZg00BGg8g6tkO4OkjM_3QZgkAdzeJfXwaR9X99GMDtDz9JQlJ2tg_tDz9tXAmdfjNrOaO2CZu7j67t0vgLVMPnAHRc6cq_roMcdmr4nNB9T4dQ12lBQtdAsYsvRy-pmcORsZsBMXXGVSU?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/iMWjcpsQ2nshue3UgnXJhQR9zIiqpA6VHGNDzafQ6mV5EUzqs8r2bEVr_yMi6UOkOyfGFw1OPDi2piIPy4u156HpvdAyk12CC2jDO5UPC6kuBzzuVjRwHYW9BJ9G4n84mdCiVQ18Kb4oGn6TWLRJ2ObMXrx-c-uXxGj78B6NYtrTtrVla_NQFN4uzgRQ3Yhe?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/HP3bQYHfRapDpBdjvtClM1N40EDqrXyepb_dUVly8qLnsxmiav-SsKB2ztd8F2hFFl6Dm6ekd9gmfY3LJIkHBAQDfCGFTh0VvS02DXhyld3WmxpQamCopVfmkzv8y308MGny0emdHoiFwgpibJt_F0ITQjylkdGzHWxdHMfbwfaGESKNUqDYdxkOiMRs7-wW?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MnTcFAIjbW2iFLXFFCxTJXH9I73ohS06dF7pdTY9xoBtJ6NG1Lr-8yg-qk3yBpKeZ0wDVA4ijny8Rf2b861BgrybyZSCzL4mGo9FRJi-RRsjvsPgew76M-6T5g-KlMhHApB8Fxf5vLXUgvDYmiHvUGx68rZXymAYLQdXaR364bicN7fIwZV8yizrOuUkVDSK?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/P6r946mCWkTs_Cuj5zg-qIqqc3jYYyBRRT47_K_g3SJtQfF63fg505p6ym4Jn-0u2k5bKoXkWPcF-cdkAX0wcmp6HoaWIlt8XA67IfthwH6i0lYB4RphSxNrWu0dvqQtQAM1TDp9m0EcuwPj08kU1DkRNR1ZwgKU2SDOO40MLpabfbJ31BoR9H7xnM21_vIR?purpose=fullsize)

---

### 1️⃣ Inorder (LNR)

Left → Root → Right
👉 Sorted output (BST)

### 2️⃣ Preorder (NLR)

Root → Left → Right

### 3️⃣ Postorder (LRN)

Left → Right → Root

### 4️⃣ Level Order (BFS)

Level by level (uses Queue)

---

# 🔹 7. Practical Implementation (Programs)

---

## ✅ 1. Insertion in BST (C++)

```cpp
Node* insert(Node* root, int value) {
    if (root == NULL)
        return new Node(value);

    if (value < root->data)
        root->left = insert(root->left, value);
    else
        root->right = insert(root->right, value);

    return root;
}
```

---

## ✅ 2. Searching in BST

```cpp
bool search(Node* root, int key) {
    if (root == NULL) return false;

    if (root->data == key) return true;

    if (key < root->data)
        return search(root->left, key);
    else
        return search(root->right, key);
}
```

---

## ✅ 3. Inorder Traversal

```cpp
void inorder(Node* root) {
    if (root == NULL) return;

    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}
```

---

## ✅ 4. Level Order (Queue)

```cpp
void levelOrder(Node* root) {
    if (!root) return;

    queue<Node*> q;
    q.push(root);

    while (!q.empty()) {
        Node* curr = q.front();
        q.pop();

        cout << curr->data << " ";

        if (curr->left) q.push(curr->left);
        if (curr->right) q.push(curr->right);
    }
}
```

---

# 🔹 8. Practical Use Cases

* Database indexing (B-Tree, BST)
* Autocomplete systems
* Expression evaluation
* Routing algorithms
* Game decision making

---

# 🔥 9. MNC-Level Questions + Solutions

---

## ⭐ Q1: Height of Binary Tree

### Problem:

Find height (max depth)

### Solution:

```cpp
int height(Node* root) {
    if (root == NULL) return 0;

    return 1 + max(height(root->left), height(root->right));
}
```

---

## ⭐ Q2: Check if Tree is BST

```cpp
bool isBST(Node* root, int min, int max) {
    if (!root) return true;

    if (root->data <= min || root->data >= max)
        return false;

    return isBST(root->left, min, root->data) &&
           isBST(root->right, root->data, max);
}
```

---

## ⭐ Q3: Lowest Common Ancestor (LCA)

```cpp
Node* LCA(Node* root, int n1, int n2) {
    if (!root) return NULL;

    if (root->data > n1 && root->data > n2)
        return LCA(root->left, n1, n2);

    if (root->data < n1 && root->data < n2)
        return LCA(root->right, n1, n2);

    return root;
}
```

---

## ⭐ Q4: Diameter of Tree

```cpp
int diameter(Node* root, int &height) {
    if (!root) {
        height = 0;
        return 0;
    }

    int lh = 0, rh = 0;

    int ld = diameter(root->left, lh);
    int rd = diameter(root->right, rh);

    height = 1 + max(lh, rh);

    return max({lh + rh, ld, rd});
}
```

---

# 🔹 10. Complexity

| Operation | Time     |
| --------- | -------- |
| Search    | O(log n) |
| Insert    | O(log n) |
| Delete    | O(log n) |

Worst Case → O(n)

---

# 🔹 11. Key Interview Tips

👉 Focus on:

* Recursion
* Traversals
* Tree properties
* Edge cases (NULL, single node)

---

# 💡 Final Summary

Binary Tree is:

✔ Foundation of Trees
✔ Base for Graphs, Heaps, AVL
✔ Asked in almost every tech interview
