import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-abc",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrAbc {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.25 15c-0.41 0-0.75-0.34-0.75-0.75v-0.75h-2v0.75c0 0.41-0.340.75-0.750.75S3 14.66 3 14.25V10c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v4.25c0 0.41-0.340.75-0.750.75zm-0.75-4.5h-2V12h2v-1.5zm7 1.5c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v1c0 0.55-0.45 1-1 1zM11 10.5v0.75h2v-0.75h-2zm2 2.25h-2v0.75h2v-0.75zm8-2.5c0 0.41-0.340.75-0.750.75a0.760.76 0 0 1-0.71-0.5H17.5v3h2.04c0.1-0.290.38-0.50.71-0.50.41 0 0.750.340.750.75V14c0 0.55-0.45 1-1 1h-3c-0.55 0-1-0.45-1-1v-4c0-0.550.45-1 1-1h3c0.55 0 1 0.45 1 1v0.25z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrAbc;
