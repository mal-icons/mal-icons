import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ph-chat-centered",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class PhChatCentered {
  readonly viewBox = "0 0 256 256";
  readonly nodes: NodeTuple[] = [["path",{"d":"M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16H99.47l14.81,24.23a16,16,0,0,0,27.410.06L156.53,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,144H156.53a16.07,16.07,0,0,0-13.69,7.71L128,216l-14.85-24.3A16.08,16.08,0,0,0,99.47,184H40V56H216Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default PhChatCentered;
