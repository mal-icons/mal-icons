import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-speech-to-text",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrSpeechToText {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M689.57-570Q661-570 640.5-590.5T620-640v-160q0-29 20.56-49.5Q661.13-870 690-870q29 0 49.5 20.5T760-800v160q0 29-20.5 49.5T689.57-570ZM180-80q-24.75 0-42.37-17.62T120-140v-680q0-24.75 17.63-42.37T180-880h310q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T490-820H180v680h480v-80q0-12.75 8.68-21.37 8.68-8.62 21.5-8.62 12.83 0 21.33 8.63T720-220v80q0 24.75-17.62 42.38T660-80H180Zm350-170H310q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T310-310h220q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T530-250Zm-80-120H310q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T310-430h140q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T450-370Zm240-120q54 0 94.5-33.5T836-607q3-14 12.1-23.5 9.1-9.5 22-9.5Q883-640 891-630q8 10 6 24-11 68-59.5 116T720-432v72q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T660-360v-72q-68-10-117-58t-60-116q-2-14 6-24t20.9-10q12.9 0 22 9.5Q541-621 544-607q11 50 51.5 83.5T690-490Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrSpeechToText;
