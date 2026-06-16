import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-md-sos",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdSos {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13.5 7h-3c-1.1 0-2 0.9-2 2v6c0 1.10.9 2 2 2h3c1.1 0 2-0.9 2-2V9c0-1.1-0.9-2-2-2zm0 8h-3V9h3v6zM1 15h4v-2H3c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h4v2H3v2h2c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2H1v-2zm16 0h4v-2h-2c-1.1 0-2-0.9-2-2V9c0-1.10.9-2 2-2h4v2h-4v2h2c1.1 0 2 0.9 2 2v2c0 1.1-0.9 2-2 2h-4v-2z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdSos;
