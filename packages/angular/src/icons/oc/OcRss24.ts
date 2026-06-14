import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-rss-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRss24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.5 3.25a0.750.75 0 0 1 0.75-0.75C14.05 2.5 22 10.45 22 20.25a0.750.75 0 0 1-1.5 0C20.5 11.28 13.23 4 4.25 4a0.750.75 0 0 1-0.75-0.75Zm0.75 6.25C10.19 9.5 15 14.31 15 20.25a0.750.75 0 0 1-1.5 0A9.25 9.25 0 0 0 4.25 11a0.750.75 0 0 1 0-1.5ZM3.5 19a2 2 0 1 1 40A2 2 0 0 1 3.5 19Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRss24;
