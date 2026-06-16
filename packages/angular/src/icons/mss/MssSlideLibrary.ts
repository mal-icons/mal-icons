import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-slide-library",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSlideLibrary {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-160v-520h60v460h580v60H80Zm160-160v-480h418l-60 60H300v360h520v-298l60-60v418H240Zm300-169q-21 0-39-9t-31-26q14 0 24.5-10.5T505-559q0-22 15.5-37t37.5-15q22 0 37 15t15 37q0 29-20.5 49.5T540-489Zm119-114-57-57 186-184 56 56-185 185Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSlideLibrary;
