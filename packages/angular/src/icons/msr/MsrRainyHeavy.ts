import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-rainy-heavy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrRainyHeavy {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M333-213q-11 6-23 2t-17-15L53-706q-5-11-1.5-23.5T66-747q11-5 23.5-1.5T107-734l240 480q5 11 1 23t-15 18Zm187 0q-11 6-23 2t-17-15L240-706q-5-11-1.5-23.5T253-747q11-5 23-1.5t17 14.5l241 480q5 11 1 23t-15 18Zm374 0q-11 5-23.5 1T853-227L613-707q-5-11-1-23t15-17q11-5 23-1.5t17 14.5l240 480q5 11 1.5 23.5T894-213Zm-187-1q-11 6-23 2t-17-15L427-707q-5-11-1.5-23t14.5-17q11-5 23-1.5t17 14.5l241 480q5 11 1 22.5T707-214Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrRainyHeavy;
