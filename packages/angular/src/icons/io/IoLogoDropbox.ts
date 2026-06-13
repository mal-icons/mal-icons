import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-io-logo-dropbox",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class IoLogoDropbox {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"d":"M256.32,126.24,136.16,204.49l120.16,78.24L136.16,361,16,282.08l120.16-78.24L16,126.24,136.16,48ZM135.52,385.76l120.16-78.25,120.16,78.25L255.68,464Zm120.8-103.68,120.16-78.24-120.16-77.6L375.84,48,496,126.24,375.84,204.49,496,282.73,375.84,361Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default IoLogoDropbox;
