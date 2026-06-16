import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-screen-lock-landscape",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssScreenLockLandscape {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M40-200v-560h880v560H40Zm90-60v-440h-30v440h30Zm60 0h580v-440H190v440Zm640 0h30v-440h-30v440ZM130-700h-30 30Zm700 0h30-30ZM360-320v-200h40v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h40v200H360Zm70-200h100v-40q0-20-15-33.5T480-607q-20 0-35 13.51-15 13.51-15 33.49v40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssScreenLockLandscape;
