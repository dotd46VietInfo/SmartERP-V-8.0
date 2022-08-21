using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Serenity.Abstractions;
using Serenity.Data;
using SmartERP.Distributor.Entities;
using System;

namespace SmartERP.Banks.Pages.Distributor
{
    public class DistributorController : Controller
    {
        protected ISqlConnections SqlConnections { get; }
        private IUserRetrieveService UserRetriever { get; }
        public DistributorController(ISqlConnections sqlConnections, IUserRetrieveService userRetriever)
        {
            SqlConnections = sqlConnections;
            UserRetriever = userRetriever ?? throw new ArgumentNullException(nameof(userRetriever));
        }
        // GET: DistributorController
        [Route("Distributor/Distributor")]
        public ActionResult Index()
        {
            using (var connection = SqlConnections.NewFor<DistributorsRow>())
            {
                var list = connection.List<DistributorsRow>();
                return View(list);
            }
        }

        // GET: DistributorController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: DistributorController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: DistributorController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DistributorController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: DistributorController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: DistributorController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: DistributorController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
