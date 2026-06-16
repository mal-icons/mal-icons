import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-screen-search-desktop",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssScreenSearchDesktop {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m623-361 32-32-88-88q11-17 18.5-35.36T593-555q0-57-39-96t-96-39q-57 0-96 39.08-39 39.08-39 96Q323-498 362-459t96 39q22.09 0 41.54-7.5T537.72-446L623-361ZM458.04-470Q423-470 398-494.96q-25-24.95-25-60Q373-590 397.97-615T458-640q35 0 60 24.96 25 24.96 25 60Q543-520 518.04-495q-24.95 25-60 25ZM40-120v-60h880v60H40Zm40-120v-600h800v600H80Zm60-60h680v-480H140v480Zm0 0v-480 480Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssScreenSearchDesktop;
