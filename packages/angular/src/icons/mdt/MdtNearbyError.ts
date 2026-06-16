import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-nearby-error",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtNearbyError {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m12 7.57 4.42 4.42L12 16.41l-4.42-4.42L12 7.57zm0 11.62-7.2-7.2 7.2-7.2 6 6V7.16l-4.58-4.58c-0.78-0.78-2.05-0.78-2.83 0l-8.01 8c-0.780.78-0.78 2.05 0 2.83l8.01 8c0.780.78 2.050.78 2.83 0L18 16.82v-3.63l-6 6zm8 0.81h2v2h-2v-2zm2-10h-2v8h2v-8"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtNearbyError;
