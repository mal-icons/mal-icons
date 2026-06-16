import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-hard-drive",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssHardDrive {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M140-260h680v-280H140v280Zm540.12-90Q701-350 715.5-364.62q14.5-14.62 14.5-35.5Q730-421 715.38-435.5q-14.62-14.5-35.5-14.5Q659-450 644.5-435.38q-14.5 14.62-14.5 35.5Q630-379 644.62-364.5q14.62 14.5 35.5 14.5ZM880-600h-85L695-700H265L165-600H80l160-160h480l160 160ZM80-200v-400h800v400H80Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssHardDrive;
