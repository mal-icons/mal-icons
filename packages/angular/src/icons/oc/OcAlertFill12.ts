import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-alert-fill-12",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcAlertFill12 {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.860.71c0.5-0.9 1.79-0.9 2.29 0l4.68 8.35a1.31 1.31 0 0 1-1.15 1.95H1.33A1.31 1.31 0 0 1 0.18 9.06ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcAlertFill12;
