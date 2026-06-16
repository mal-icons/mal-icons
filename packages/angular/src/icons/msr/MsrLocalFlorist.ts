import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-local-florist",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLocalFlorist {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80q0-128 91-230.5T786-435q11-2 20.5 1.5T823-423q7 7 10.5 16.5T835-386q-22 124-125 215T480-80Zm75-75q80-26 133-79t79-133q-80 26-133 79.5T555-155Zm-75 75q0-128-91-230.5T174-435q-10.57-2-20.09 1.5Q144.4-430 137-423q-7 7-10.5 16.5T125-386q22 124 125 215t230 91Zm-75-75q-80-26-133-79t-79-133q80 26 133 79.5T405-155Zm209.2-362q22.8 0 39.3-16.42Q670-549.85 670-572.97q0-17.03-9-29.53T637-623l-47-23q-5 29-16.5 50.5T540-557l42.38 29.82Q589-522 596.8-519.5q7.8 2.5 17.4 2.5ZM590-654l47-23q15-8 23.5-21.24t8.5-28.89q0-22.87-15.89-39.37Q637.22-783 614-783q-9 0-16.67 2.5Q589.67-778 582-773l-44 30q23 17 35 38t17 51Zm-159-94q14-6 26.5-9t22.5-3q10 0 22.5 3t26.5 9l7-62q2-21-16-35.5T480.5-860q-21.5 0-40 14.77Q422-830.45 424-810l7 62Zm49.5 148q20.5 0 35-15t14.5-35.5q0-20.5-14.37-35T480-700q-20 0-35 14.38T430-650q0 20 15 35t35.5 15Zm0 160q21.5 0 39.5-14.5t16-35.5l-7-62q-14 6-26.5 9t-22.5 3q-10 0-22.5-3t-26.5-9l-7 62q-2 20.45 16.5 35.23Q459-440 480.5-440ZM370-654q5-30 16.5-51t33.5-38l-42.38-29.81Q371-778 363.2-780.5q-7.8-2.5-17.4-2.5-22.8 0-39.3 16.48-16.5 16.47-16.5 39.66Q290-711 299-698t24 21l47 23Zm-24 136q9 0 16.5-2.5T378-528l44-29q-23-17-35-38.5T370-646l-47 23q-15 8-23.5 21.24T291-572.87Q292-550 307.34-534q15.34 16 38.66 16Zm134 138q-36.32 0-65.66-21.5Q385-423 371-458q-6 0-12.50.5t-12.50.5q-47.87 0-81.94-34.06Q230-525.13 230-573q0-20 8-39.5t23-37.5q-14-18-22-37.5t-8-39.06Q231-775 264.58-809T346-843q6 0 12.50.5t12.50.5q14-35 43.34-56.5T480-920q36.32 0 65.66 21.5Q575-877 589-842q6 0 12.5-0.5t12.5-0.5q47.84 0 81.42 34.06Q729-774.87 729-727q0 20-7.5 39.5T699-650q14 18 22 37.5t8 39.06Q729-525 695.42-491T614-457q-6 0-12.5-0.5T589-458q-14 35-43.34 56.5T480-380Zm0-380Zm58 17Zm2 186Zm-60 17Zm-58-17Zm-2-186Zm-15 588Zm150 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLocalFlorist;
