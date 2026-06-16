import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-javascript",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoJavascript {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M274-360q-15 0-24.5-9.5T240-394v-66h48v52h84v-192h48v206q0 15-9.5 24.5T386-360H274Zm240 0q-15 0-24.5-9.5T480-394v-46h48v32h104v-53H514q-14 0-24-10t-10-24v-71q0-15 9.5-24.5T514-600h132q15 0 24.5 9.5T680-566v46h-48v-32H528v53h118q14 0 24 10t10 24v71q0 15-9.5 24.5T646-360H514Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoJavascript;
