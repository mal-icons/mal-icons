import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-night-shelter",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNightShelter {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M220-120q-24.75 0-42.37-17.62T160-180v-390q0-14.25 6.38-27T184-618l260-195q15.68-12 35.84-12Q500-825 516-813l260 195q11.25 8.25 17.63 21T800-570v390q0 24.75-17.62 42.38T740-120H220Zm0-60h520v-394L480-763 220-574v394Zm260-292ZM320-300h320v40q0 8 6 14t14 6q8 0 14-6t6-14v-140q0-33-23.5-56.5T600-480H490q-12.75 0-21.37 8.63T460-450v110H320v-160q0-8-6-14t-14-6q-8 0-14 6t-6 14v240q0 8 6 14t14 6q8 0 14-6t6-14v-40Zm70-60q21 0 35.5-14.5T440-410q0-21-14.5-35.5T390-460q-21 0-35.5 14.5T340-410q0 21 14.5 35.5T390-360Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNightShelter;
