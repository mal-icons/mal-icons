import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-ballot",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfBallot {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M13 9.5h5v-2h-5v2zm0 7h5v-2h-5v2zm6 4.5H5c-1.1 0-2-0.9-2-2V5c0-1.10.9-2 2-2h14c1.1 0 2 0.9 2 2v14c0 1.1-0.9 2-2 2zM6 11h5V6H6v5zm1-4h3v3H7V7zM6 18h5v-5H6v5zm1-4h3v3H7v-3z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfBallot;
