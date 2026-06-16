import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-send-to-mobile",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoSendToMobile {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m686-328-42-42 82-81H480v-60h246l-82-81 42-42 153 153-153 153ZM260-40q-24.75 0-42.37-17.62T200-100v-760q0-24.75 17.63-42.37T260-920h440q24.75 0 42.38 17.63T760-860v146h-60v-56H260v580h440v-56h60v146q0 24.75-17.62 42.38T700-40H260Zm0-90v30h440v-30H260Zm0-700h440v-30H260v30Zm0 0v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoSendToMobile;
