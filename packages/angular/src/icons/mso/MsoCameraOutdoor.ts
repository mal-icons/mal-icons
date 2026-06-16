import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-camera-outdoor",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCameraOutdoor {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M510-210q-14 0-24.5-10.5T475-245v-170q0-14 10.5-24.5T510-450h175q14 0 24.5 10.5T720-415v55l80-46v152l-80-46v55q0 14-10.5 24.5T685-210H510Zm-350 90v-480l320-240 320 240v120h-60v-90L480-765 220-570v390h580v60H160Zm320-352Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCameraOutdoor;
