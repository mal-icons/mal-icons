import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-auto-stories",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfAutoStories {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m19 1-5 5v11l5-4.5V1zM1 6v14.65c0 0.250.250.50.50.50.1 0 0.15-0.050.25-0.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.050.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6zm22 13.5V6c-0.6-0.45-1.25-0.75-2-1v13.5c-1.1-0.35-2.3-0.5-3.5-0.5-1.7 0-4.150.65-5.5 1.5v2c1.35-0.85 3.8-1.5 5.5-1.5 1.65 0 3.350.3 4.75 1.050.10.050.150.050.250.050.25 0 0.5-0.250.5-0.5v-1.1z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfAutoStories;
