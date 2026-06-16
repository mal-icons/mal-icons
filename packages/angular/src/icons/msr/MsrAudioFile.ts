import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-audio-file",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrAudioFile {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M427-192q41 0 70-28.31T526-290v-202h86q12.75 0 21.38-8.68 8.63-8.68 8.63-21.5 0-12.82-8.62-21.32T612-552h-96q-12.75 0-21.37 8.63T486-522v157q-11-9-26.38-14-15.38-5-32.61-5-39.27 0-66.13 27.5Q334-329 334-289.5t26.87 68.5q26.87 29 66.13 29ZM220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h336q12.44 0 23.72 5T599-862l183 183q8 8 13 19.28 5 11.28 5 23.72v496q0 24-18 42t-42 18H220Zm331-584v-156H220v680h520v-494H581q-12.75 0-21.37-8.62T551-664ZM220-820v186-186 680-680Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrAudioFile;
