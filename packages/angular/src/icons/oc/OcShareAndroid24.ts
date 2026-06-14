import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-share-android-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcShareAndroid24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 5.5a3.5 3.5 0 0 1-6.06 2.38l-5.11 3.02a3.5 3.5 0 0 1 0 2.19l5.11 3.02a3.5 3.5 0 1 1-0.76 1.29l-5.11-3.02a3.5 3.5 0 1 1-3.84-5.64 3.5 3.5 0 0 1 3.840.87l5.11-3.02A3.5 3.5 0 1 1 20 5.5Zm-1.5 13a2 2 0 1 0-40 2 2 0 0 0 40Zm0-13a2 2 0 1 0-40A2 2 0 0 0 18.5 5.5ZM5.5 14a2 2 0 1 0 0-4A2 2 0 0 0 5.5 14Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcShareAndroid24;
