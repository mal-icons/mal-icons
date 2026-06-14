import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-share-android-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcShareAndroid16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M15 3a3 3 0 0 1-5.17 2.07l-3.92 2.18a2.99 2.99 0 0 1 0 1.51l3.92 2.18a3 3 0 1 1-0.73 1.31l-3.92-2.18a3 3 0 1 1 0-4.13l3.92-2.18A3 3 0 1 1 15 3Zm-1.5 10a1.5 1.5 0 1 0-30A1.5 1.5 0 0 0 13.5 13Zm-9-5a1.5 1.5 0 1 0-30A1.5 1.5 0 0 0 4.5 8Zm9-5a1.5 1.5 0 1 0-30A1.5 1.5 0 0 0 13.5 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcShareAndroid16;
