import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-abc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsAbc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M21 11h-1.5v-0.5h-2v3h2V13H21v2h-5V9h5v2zM8 9v6H6.5v-1.5h-2V15H3V9h5zm-1.5 1.5h-2V12h2v-1.5zm7 1.5c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1h-4V9h4c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1zM11 10.5v0.75h2v-0.75h-2zm2 2.25h-2v0.75h2v-0.75z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsAbc;
