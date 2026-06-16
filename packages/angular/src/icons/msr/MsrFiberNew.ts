import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-fiber-new",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFiberNew {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h760q24.75 0 42.38 18T920-740v520q0 24-17.62 42T860-160H100Zm0-60h760v-520H100v520Zm75-307 110 161q3 5 7.47 7 4.47 2 9.84 2h10.74Q322-357 328-363.12T334-378v-203q0-9-6.5-15.5T312-603q-9 0-16 6.5t-7 15.5v148L182-593q-3-5-8.5-7.5t-10.47-2.5h-9.93Q144-603 137-596.5q-7 6.5-7 15.5v202q0 9 7 15.5t16 6.5q9 0 15.5-7t6.5-16v-147Zm219 170h120q9 0 15.5-7t6.5-16q0-9-6.5-15.5T514-402h-85v-54h85q9 0 15.5-7t6.5-16q0-9-6.5-15.5T514-501h-85v-56h84q10.12 0 16.56-6.42 6.44-6.42 6.44-16.5 0-10.08-6.44-16.58-6.44-6.5-16.56-6.5H394q-6 0-10.5 4.5T379-588v216q0 6 4.5 10.5T394-357Zm233 0h170q14.45 0 24.23-9.49Q831-375.97 831-390v-191q0-9-6.5-15.5T809-603q-9 0-16 6.5t-7 15.5v174h-53v-133q0-9-6.5-15.5T711-562q-9 0-16 6.5t-7 15.5v133h-49v-174q0-9-6.5-15.5T617-603q-9 0-16 6.5t-7 15.5v191q0 14.03 9.49 23.51Q612.98-357 627-357ZM100-220v-520 520Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFiberNew;
