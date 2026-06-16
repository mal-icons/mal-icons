import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-hard-drive-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHardDrive2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M540-200q17 0 28.5-11.5T580-240q0-17-11.5-28.5T540-280q-17 0-28.5 11.5T500-240q0 17 11.5 28.5T540-200Zm140 0q17 0 28.5-11.5T720-240q0-17-11.5-28.5T680-280q-17 0-28.5 11.5T640-240q0 17 11.5 28.5T680-200ZM120-430v-450h720v450h-60v-390H180v390h-60Zm60 60v230h600v-230H180ZM120-80v-350h720v350H120Zm60-350h600-600Zm0 60h600-600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHardDrive2;
