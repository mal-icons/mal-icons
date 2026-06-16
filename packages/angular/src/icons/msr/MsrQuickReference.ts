import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-quick-reference",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrQuickReference {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M655-150q8 0 14-6t6-14v-110q0-8-6-14t-14-6q-8 0-14 6t-6 14v110q0 8 6 14t14 6Zm0-189q8 0 14-6.15t6-14.35q0-8.2-6-14.35T655-380q-9 0-14.5 6t-5.5 14.29q0 8.29 5.5 14.5Q646-339 655-339ZM180-820v295-4 389-680 186-186Zm129 400h138q12-17 26.5-32t31.5-28H309q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T309-420Zm0 170h93q-2-15-1.5-30t2.5-30h-94q-12.75 0-21.37 8.68-8.62 8.68-8.62 21.5 0 12.83 8.63 21.33T309-250ZM180-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h336q12.44 0 23.72 5T559-862l183 183q8 8 13 19.28 5 11.28 5 23.72v130q-14-7-29-11.5t-31-7.5v-109H541q-12.75 0-21.37-8.62T511-664v-156H180v680h260q11 17 24 32t28 28H180Zm475-389q80.51 0 137.26 56.75Q849-355.51 849-275q0 80.51-56.74 137.26Q735.51-81 655-81q-80.51 0-137.25-56.74Q461-194.49 461-275q0-80.51 56.75-137.25Q574.49-469 655-469Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrQuickReference;
