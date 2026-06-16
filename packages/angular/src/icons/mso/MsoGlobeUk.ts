import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-globe-uk",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoGlobeUk {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.93-141Q499-141 517-143t35-6.26L501-226H353v-42.33q0-34.92 24.82-59.8Q402.64-353 437.5-353H522v-127h-84q-17 0-30-13t-13-30v-85h-18.82Q349-608 329.5-626.5 310-645 310-672.49q0-9.51 3-19.01t8-17.5l66-97q-107 30-176.5 119.44T141-480h42v-43q0-17 12.5-29.5T225-565h85q17 0 30 12.5t13 29.5v43q0 17-13 29.5T310-438v42.74q0 35.26-24.91 59.76t-59.88 24.5H186q45 77 122.33 123.5T479.93-141ZM802-376q8-25 12.5-50.94 4.5-25.94 4.5-53.47 0-118.59-71.97-209.27Q675.07-780.36 565-809v116.52q35 0 59.92 24.89 24.93 24.89 24.93 59.85V-523q20.15 0 36.65 5.5Q703-512 717-498l85 122ZM480.27-80q-82.73 0-155.5-31.5t-127.27-86q-54.5-54.5-86-127.34Q80-397.68 80-480.5q0-82.82 31.5-155.66Q143-709 197.5-763t127.34-85.5Q397.68-880 480.5-880q82.82 0 155.66 31.5Q709-817 763-763t85.5 127Q880-563 880-480.27q0 82.73-31.5 155.5T763-197.68q-54 54.32-127 86Q563-80 480.27-80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoGlobeUk;
