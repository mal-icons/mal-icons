import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-no-sound",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrNoSound {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m724-437-92 93q-9 9-21 9t-21-9q-9-9-9-21.5t9-21.5l92-92-93-92q-9-9-9-21t9-21q9-9 21.5-9t21.5 9l92 92 92-93q9-9 21-9t21 9q9 9 9 21.5t-9 21.5l-92 92 93 92q9 9 9 21t-9 21q-9 9-21.5 9t-21.5-9l-92-92Zm-444 77H150q-13 0-21.5-8.5T120-390v-180q0-13 8.5-21.5T150-600h130l149-149q14-14 32.5-6.5T480-728v496q0 20-18.5 27.5T429-211L280-360Zm140-288L307-540H180v120h127l113 109v-337ZM311-481Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrNoSound;
