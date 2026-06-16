import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-shuffle-on",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoShuffleOn {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M100-40q-24 0-42-18t-18-42v-761q0-23 18-41.5t42-18.5h761q23 0 41.5 18.5T921-861v761q0 24-18.5 42T861-40H100Zm482-110h229v-229h-60v127L565-436l-42 43 184 183H582v60Zm-389 0 558-558v126h60v-229H582v60h127L151-193l42 43Zm203-374 43-43-245-244-43 43 245 244Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoShuffleOn;
