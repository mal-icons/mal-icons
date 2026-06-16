import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-directions-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDirectionsAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M479.95-77Q468-77 456.5-81 445-85 437-93L93-437q-8-8-12-19.55-4-11.55-4-23.5t4-23.45Q85-515 93-523l344-344q8-8 19.55-12 11.55-4 23.5-4t23.45 4q11.5 4 19.5 12l344 344q8 8 12 19.55 4 11.55 4 23.5t-4 23.45q-4 11.5-12 19.5L523-93q-8 8-19.55 12-11.55 4-23.5 4ZM308-308l172 172 344-344-344-344-344 344 172 172Zm172 25 197-197-197-197-43 43 124 124H283v60h278L437-326l43 43Zm0-197Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDirectionsAlt;
