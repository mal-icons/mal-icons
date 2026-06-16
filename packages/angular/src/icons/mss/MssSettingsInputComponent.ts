import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mss-settings-input-component",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MssSettingsInputComponent {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M123-40v-170H40v-505h83v-175q0-14 8-22t22-8q14 0 22 8t8 22v175h83v505h-83v170h-60Zm327 0v-170h-83v-505h83v-175q0-14 8-22t22-8q14 0 22 8t8 22v175h83v505h-83v170h-60Zm327 0v-170h-83v-505h83v-175q0-14 8-22t22-8q14 0 22 8t8 22v175h83v505h-83v170h-60ZM100-655v184h106v-184H100Zm327 0v184h106v-184H427Zm327 0v184h106v-184H754ZM100-267h106v-144H100v144Zm327 0h106v-144H427v144Zm327 0h106v-144H754v144ZM153-441Zm327 0Zm327 0Zm-707-30h106-106Zm327 0h106-106Zm327 0h106-106Zm-654 60h106-106Zm327 0h106-106Zm327 0h106-106Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MssSettingsInputComponent;
