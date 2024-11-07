﻿using System;
using System.Collections.Generic;

namespace Masterpiece.Models;

public partial class Admin
{
    public int AdminId { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? Img { get; set; }

    public string? Password { get; set; }

    public byte[]? PasswordHash { get; set; }

    public byte[]? PasswordSalt { get; set; }

    public virtual ICollection<SaleRequest> SaleRequests { get; set; } = new List<SaleRequest>();
}