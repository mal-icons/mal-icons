import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-tv-off",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrTvOff {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m863-220-43-43v-517H303l-60-60h577q24 0 42 18t18 42v517q0 13.4-5 24.2Q870-228 863-220ZM158-840l60 60h-78v520h512L50-862q-9-9-8.5-21.5T51-905q9-9 21-9t21 9l765 764q9 9 9 21t-9 21q-9 9-21.5 9T815-99L713-200h-83v50q0 12.75-8.62 21.38T600-120H360q-12.75 0-21.37-8.62T330-150v-50H140q-24 0-42-18t-18-42v-520q0-24 18.5-42t41.5-18h18Zm263 350Zm143-28Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrTvOff;
