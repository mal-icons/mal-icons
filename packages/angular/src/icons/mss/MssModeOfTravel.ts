import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-mode-of-travel",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssModeOfTravel {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-80Q325-214 242.5-330T160-552q0-149 97-238.5T480-880q134 0 228 94t94 258l94-94 42 42-166 166-166-166 42-42 94 94q0-132-73-212t-189-80q-109 0-184.5 75.5T220-552q0 82 66 179t194 214q20-18 43-41l40-40q-6-12-9.5-24t-3.5-23q0-38 26.5-64t63.5-26q38 0 64 26t26 64q0 38-26 64t-64 26q-7 0-14.5-1t-16.5-4q-31 32-61 61t-68 61Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssModeOfTravel;
