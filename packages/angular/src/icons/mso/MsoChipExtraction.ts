import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-chip-extraction",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoChipExtraction {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-121q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-481q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-841v60q-124 0-212 88t-88 212q0 125.36 88 212.68Q356-181 480-181v60Zm173-173-42-43 113-113H360v-60h364L611-624l42-42 186 186-186 186Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoChipExtraction;
