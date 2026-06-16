import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mds-dinner-dining",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdsDinnerDining {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m2 19 2 2h16l2-2zm1-1h16.97c0.29-3.26-2.28-6-5.48-6-2.35 0-4.35 1.48-5.14 3.55-0.41-0.23-0.87-0.38-1.35-0.47V9h4V6.75h9v-1.5h-9V3H3v1.5h1v0.75H3v1.5h1v0.75H3V9h1v7.39c-0.440.46-0.78 1-1 1.61zM8 7.5v-0.75h2v0.75H8zm2-2.25H8V4.5h2v0.75zM5.5 4.5h1v0.75h-1V4.5zm0 2.25h1v0.75h-1v-0.75zM6.5 9v6.06c-0.350.06-0.680.17-1 0.3V9h1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdsDinnerDining;
