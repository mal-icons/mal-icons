import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-dropbox-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfDropboxAlt {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M0.5 9.34l4.71 3.07 3.29-2.75-4.74-2.93z","fill":"currentColor"}],["path",{"d":"M5.21 1.06l-4.71 3.07 3.26 2.61 4.75-2.93z","fill":"currentColor"}],["path",{"d":"M16.5 4.13l-4.71-3.07-3.29 2.75 4.75 2.93z","fill":"currentColor"}],["path",{"d":"M8.5 9.67l3.29 2.75 4.71-3.07-3.25-2.61z","fill":"currentColor"}],["path",{"d":"M8.51 10.26l-3.3 2.74-1.41-0.92v1.03l4.72 2.83 4.72-2.83v-1.03l-1.41 0.92z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfDropboxAlt;
