import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-dev-vault-icon",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class DevVaultIcon {
  readonly viewBox = "0 0 600 600";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#devicon-vault-icon-1-a)"}],["path",{"fill":"currentColor","d":"m0 0 299 600L600 0zm334.4 120.4h34.9v34.9h-34.9zm-69.2 139.1h-34.8v-34.7h34.8zm0-52.1h-34.8v-34.7h34.8zm0-52.1h-34.8v-34.9h34.8zm52.5 156.4H283V277h34.7zm0-52.2H283v-34.7h34.7zm0-52.1H283v-34.7h34.7zm0-52.1H283v-34.9h34.7zm16.7 17.4h34.9v34.7h-34.9zm0 87v-34.8h34.9v34.7z"}],["path",{"fill":"currentColor","d":"M0 0h600v600H0z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default DevVaultIcon;
