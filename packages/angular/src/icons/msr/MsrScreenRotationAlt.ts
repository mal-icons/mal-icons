import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-screen-rotation-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrScreenRotationAlt {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M501-90 128-462h86l330 330 246-246H682q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T682-438h180q12.75 0 21.38 8.63T892-408v180q0 12.75-8.68 21.38-8.68 8.63-21.5 8.63-12.82 0-21.32-8.62T832-228v-108L586-90q-17.38 17-42.69 17T501-90ZM98-522q-12.75 0-21.37-8.62T68-552v-180q0-12.75 8.68-21.37Q85.35-762 98.18-762q12.83 0 21.33 8.63T128-732v108l246-246q17.38-17 42.69-17T459-870l373 372h-86L416-828 170-582h108q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T278-522H98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrScreenRotationAlt;
