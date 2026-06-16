import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-raw-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoRawOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M120-360v-240h144q23 0 35.5 12.5T312-552v63q0 20-12 30.5T271-446l37 86h-50l-32-81h-58v81h-48Zm226 0 66-240h84l70 240h-54l-18-61h-82l-15 61h-51Zm290 0-61-240h49l37 142 34-142h45l37 142 33-142h50l-58 240h-50l-33-131-37 131h-46ZM426-469h53l-18-67h-17l-18 67Zm-258-20h96v-63h-96v63Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoRawOn;
