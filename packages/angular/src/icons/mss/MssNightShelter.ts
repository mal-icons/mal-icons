import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-night-shelter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssNightShelter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M280-240h40v-60h320v60h40v-160q0-33-23.5-56.5T600-480H460v140H320v-180h-40v280Zm110-120q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360ZM160-120v-480l320-240 320 240v480H160Zm60-60h520v-394L480-763 220-574v394Zm260-292Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssNightShelter;
