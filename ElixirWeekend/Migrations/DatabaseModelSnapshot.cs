﻿// <auto-generated />
using System;
using ElixirWeekend.Repository;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace ElixirWeekend.Migrations
{
    [DbContext(typeof(Database))]
    partial class DatabaseModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 64)
                .HasAnnotation("ProductVersion", "5.0.4");

            modelBuilder.Entity("ElixirWeekend.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("CustomerId")
                        .HasColumnType("int");

                    b.Property<DateTime>("OrderedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("PrescriptionReceivedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("ProductHandoveredAt")
                        .HasColumnType("datetime(6)");

                    b.Property<DateTime>("ProductIssuedAt")
                        .HasColumnType("datetime(6)");

                    b.Property<int?>("VolunteerId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CustomerId");

                    b.HasIndex("VolunteerId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Person", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Address")
                        .HasColumnType("longtext");

                    b.Property<string>("Discriminator")
                        .IsRequired()
                        .HasColumnType("longtext");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("Surname")
                        .HasColumnType("longtext");

                    b.Property<string>("Telephone")
                        .HasColumnType("longtext");

                    b.Property<int>("YearOfBirth")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Persons");

                    b.HasDiscriminator<string>("Discriminator").HasValue("Person");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Pharmacy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<bool>("Active")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Address")
                        .HasColumnType("longtext");

                    b.Property<string>("Jib")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<string>("Telephone")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Pharmacies");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<bool>("Active")
                        .HasColumnType("tinyint(1)");

                    b.Property<bool>("Available")
                        .HasColumnType("tinyint(1)");

                    b.Property<string>("Code")
                        .HasColumnType("longtext");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("longtext");

                    b.Property<string>("MeausurementUnit")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.Property<int?>("PharmacyId")
                        .HasColumnType("int");

                    b.Property<bool>("PrescriptionNeeded")
                        .HasColumnType("tinyint(1)");

                    b.Property<float>("Price")
                        .HasColumnType("float");

                    b.Property<int?>("ProductTypeId")
                        .HasColumnType("int");

                    b.Property<float>("Quantity")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("PharmacyId");

                    b.HasIndex("ProductTypeId");

                    b.ToTable("Products");
                });

            modelBuilder.Entity("ElixirWeekend.Models.ProductType", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .HasColumnType("longtext");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("ProductTypes");
                });

            modelBuilder.Entity("ElixirWeekend.Models.SoldProduct", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<int?>("OrderId")
                        .HasColumnType("int");

                    b.Property<float>("Price")
                        .HasColumnType("float");

                    b.Property<int?>("ProductId")
                        .HasColumnType("int");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.HasIndex("ProductId");

                    b.ToTable("SoldProducts");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Customer", b =>
                {
                    b.HasBaseType("ElixirWeekend.Models.Person");

                    b.HasDiscriminator().HasValue("Customer");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Volunteer", b =>
                {
                    b.HasBaseType("ElixirWeekend.Models.Person");

                    b.HasDiscriminator().HasValue("Volunteer");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Order", b =>
                {
                    b.HasOne("ElixirWeekend.Models.Customer", "Customer")
                        .WithMany()
                        .HasForeignKey("CustomerId");

                    b.HasOne("ElixirWeekend.Models.Volunteer", "Volunteer")
                        .WithMany()
                        .HasForeignKey("VolunteerId");

                    b.Navigation("Customer");

                    b.Navigation("Volunteer");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Product", b =>
                {
                    b.HasOne("ElixirWeekend.Models.Pharmacy", "Pharmacy")
                        .WithMany()
                        .HasForeignKey("PharmacyId");

                    b.HasOne("ElixirWeekend.Models.ProductType", "ProductType")
                        .WithMany()
                        .HasForeignKey("ProductTypeId");

                    b.Navigation("Pharmacy");

                    b.Navigation("ProductType");
                });

            modelBuilder.Entity("ElixirWeekend.Models.SoldProduct", b =>
                {
                    b.HasOne("ElixirWeekend.Models.Order", "Order")
                        .WithMany("SoldProducts")
                        .HasForeignKey("OrderId");

                    b.HasOne("ElixirWeekend.Models.Product", "Product")
                        .WithMany()
                        .HasForeignKey("ProductId");

                    b.Navigation("Order");

                    b.Navigation("Product");
                });

            modelBuilder.Entity("ElixirWeekend.Models.Order", b =>
                {
                    b.Navigation("SoldProducts");
                });
#pragma warning restore 612, 618
        }
    }
}