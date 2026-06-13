import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-diamond-sharp",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoDiamondSharp {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["polygon",{"points":"396.31 32 264 32 348.19 144.26 396.31 32"}],["polygon",{"points":"115.69 32 163.81 144.26 248 32 115.69 32"}],["polygon",{"points":"256 74.67 192 160 320 160 256 74.67"}],["polygon",{"points":"422.95 51.06 376.26 160 488 160 422.95 51.06"}],["polygon",{"points":"89.05 51.06 23 160 135.74 160 89.05 51.06"}],["polygon",{"points":"146.68 192 24 192 246.8 480 247.33 480 146.68 192"}],["polygon",{"points":"365.32 192 264.67 480 265.2 480 488 192 365.32 192"}],["polygon",{"points":"329.39 192 182.61 192 256 400 329.39 192"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoDiamondSharp;
