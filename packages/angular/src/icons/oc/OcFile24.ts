import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-file-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFile24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 3a2 2 0 0 1 2-2h9.98a2 2 0 0 1 1.410.59l4.02 4.02A2 2 0 0 1 21 7.02V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-0.5a0.50.5 0 0 0-0.50.5v18a0.50.5 0 0 0 0.50.5h14a0.50.5 0 0 0 0.5-0.5V8.5h-4a2 2 0 0 1-2-2v-4Zm10 0v4a0.50.5 0 0 0 0.50.5h4a0.50.5 0 0 0-0.15-0.34l-4.02-4.02A0.50.5 0 0 0 15 2.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFile24;
